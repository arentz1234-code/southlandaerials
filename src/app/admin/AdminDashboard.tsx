"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Submission {
  id: string;
  type: "contact" | "consultation" | "pilot";
  data: Record<string, string>;
  createdAt: string;
  read: boolean;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch("/api/submissions");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error("Failed to fetch submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      await fetch(`/api/submissions/${id}`, { method: "DELETE" });
      setSubmissions(submissions.filter((s) => s.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleView = async (submission: Submission) => {
    setSelectedSubmission(submission);
    if (!submission.read) {
      await fetch(`/api/submissions/${submission.id}`, { method: "PATCH" });
      setSubmissions(
        submissions.map((s) => (s.id === submission.id ? { ...s, read: true } : s))
      );
    }
  };

  const filteredSubmissions =
    filter === "all"
      ? submissions
      : submissions.filter((s) => s.type === filter);

  const unreadCount = submissions.filter((s) => !s.read).length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "contact":
        return "bg-blue-100 text-blue-700";
      case "consultation":
        return "bg-green-100 text-green-700";
      case "pilot":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "contact":
        return "Contact";
      case "consultation":
        return "Consultation";
      case "pilot":
        return "Pilot Application";
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-secondary-900 truncate">
                Admin Panel
              </h1>
              {unreadCount > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 flex-shrink-0">
                  {unreadCount}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <a
                href="/"
                className="text-sm text-secondary-500 hover:text-secondary-700 hidden sm:block"
              >
                View Site
              </a>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-700 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-secondary-500">Total Submissions</p>
            <p className="text-3xl font-bold text-secondary-900 mt-1">
              {submissions.length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-secondary-500">Unread</p>
            <p className="text-3xl font-bold text-red-600 mt-1">{unreadCount}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-secondary-500">Contact Forms</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">
              {submissions.filter((s) => s.type === "contact").length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-secondary-500">Consultations</p>
            <p className="text-3xl font-bold text-green-600 mt-1">
              {submissions.filter((s) => s.type === "consultation").length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-100 flex items-center justify-between">
                <h2 className="font-semibold text-secondary-900">Submissions</h2>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="text-sm border border-secondary-200 rounded-lg px-3 py-1.5"
                >
                  <option value="all">All Types</option>
                  <option value="contact">Contact</option>
                  <option value="consultation">Consultation</option>
                  <option value="pilot">Pilot</option>
                </select>
              </div>

              {loading ? (
                <div className="p-8 text-center text-secondary-500">
                  Loading...
                </div>
              ) : filteredSubmissions.length === 0 ? (
                <div className="p-8 text-center text-secondary-500">
                  <svg
                    className="mx-auto h-12 w-12 text-secondary-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="mt-2">No submissions yet</p>
                  <p className="text-sm">
                    Form submissions will appear here
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-secondary-100">
                  {filteredSubmissions.map((submission) => (
                    <div
                      key={submission.id}
                      onClick={() => handleView(submission)}
                      className={`p-4 cursor-pointer hover:bg-secondary-50 transition-colors ${
                        !submission.read ? "bg-blue-50/50" : ""
                      } ${
                        selectedSubmission?.id === submission.id
                          ? "bg-primary-50"
                          : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            {!submission.read && (
                              <span className="h-2 w-2 rounded-full bg-blue-500" />
                            )}
                            <span
                              className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getTypeColor(
                                submission.type
                              )}`}
                            >
                              {getTypeLabel(submission.type)}
                            </span>
                          </div>
                          <p className="mt-1 font-medium text-secondary-900 truncate">
                            {submission.data.firstName} {submission.data.lastName}
                          </p>
                          <p className="text-sm text-secondary-500 truncate">
                            {submission.data.email}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-secondary-400">
                            {formatDate(submission.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-8">
              {selectedSubmission ? (
                <>
                  <div className="p-4 border-b border-secondary-100 flex items-center justify-between">
                    <h2 className="font-semibold text-secondary-900">Details</h2>
                    <button
                      onClick={() => handleDelete(selectedSubmission.id)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <span
                        className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getTypeColor(
                          selectedSubmission.type
                        )}`}
                      >
                        {getTypeLabel(selectedSubmission.type)}
                      </span>
                      <p className="text-xs text-secondary-400 mt-1">
                        {formatDate(selectedSubmission.createdAt)}
                      </p>
                    </div>

                    {Object.entries(selectedSubmission.data).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs font-medium text-secondary-500 uppercase tracking-wide">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="mt-1 text-secondary-900 whitespace-pre-wrap">
                          {value || "-"}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="p-8 text-center text-secondary-500">
                  <svg
                    className="mx-auto h-12 w-12 text-secondary-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <p className="mt-2">Select a submission</p>
                  <p className="text-sm">Click on an item to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
