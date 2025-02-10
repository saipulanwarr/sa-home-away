import ChartsContainer from "@/components/admin/ChartsContainer";
import {
  ChartsLoadingContaier,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import StatsContainer from "@/components/admin/StatsContainer";
import React, { Suspense } from "react";

function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContaier />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}

export default AdminPage;
