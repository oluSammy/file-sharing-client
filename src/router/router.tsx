import { Routes, Route } from "react-router-dom";
import AuthProvider from "../AuthProvider/AuthProvider";
import RequireAuth from "../AuthProvider/RequireAuth";
import DashboardContainer from "../containers/DashboardContainer";
import AllImages from "../pages/AllImages/AllImages";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/Login/Login";
import ReceivedImages from "../pages/ReceivedImages/ReceivedImages";
import SharedImages from "../pages/SharedImages/SharedImages";
import TaggedImages from "../pages/TagPage/TaggedImages";
import TaggedImagesOutlet from "../pages/TagPage/TaggedImagesOutlet";
import Upload from "../pages/Upload/Upload";

export const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="" element={<DashboardContainer />} />
          <Route path="upload" element={<Upload />} />
          <Route path="images" element={<AllImages />} />
          <Route path="shared" element={<SharedImages />} />
          <Route path="received" element={<ReceivedImages />} />
          <Route path="tag" element={<TaggedImagesOutlet />}>
            <Route path=":id" element={<TaggedImages />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};
