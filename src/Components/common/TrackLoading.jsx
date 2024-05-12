import Skeleton from "../Skeleton";

const TracksLoading = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      {Array.from({ length: 5 }).map((_, index) => {
        return <Skeleton key={index} className="h-14 w-full rounded-lg" />;
      })}
    </div>
  );
};
export default TracksLoading;
