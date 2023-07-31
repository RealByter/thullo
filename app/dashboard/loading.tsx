import { SkeletonBoardLink } from "@/components/dashboard/BoardLink";

export default function Loading() {
  return (
    <>
      <SkeletonBoardLink />
      <SkeletonBoardLink />
      <SkeletonBoardLink />
      <SkeletonBoardLink />
    </>
  );
}
