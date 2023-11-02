
import { Fragment } from "react";

const ShippingCost = () => {
    return (
        <Fragment>
            
            <h1 className="text-3xl font-bold text-center my-4">Chi phí vận chuyển</h1>
            <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
                <p className="text-lg my-2 font-bold">1. Dịch vụ Chuyển phát hàng nặng - Giải pháp vận chuyển hàng trọng lượng lớn uy tín, chất lượng</p>
                <ul className="text-md ml-4 pl-2 list-disc">
                    <li>Dịch vụ Chuyển phát hàng nặng áp dụng cho khách hàng doanh nghiệp, cá nhân có nhu cầu sử dụng dịch vụ gửi hàng có trọng lượng từ 30kg trở lên</li>
                    <li>Dịch vụ chia các mức trọng lượng theo đặc thù hàng nặng với giá cước hợp lý</li>
                    <li>Cước phí chuyển phát từ 26.000đ</li>
                    <li>Thời gian giao hàng nhanh chóng 1-2 ngày</li>
                </ul>
            
                <p className="text-lg my-2  font-bold">2. Dịch vụ Chuyển phát Hỏa tốc, hẹn giờ - Dù gần hay xa, chỉ 24 giờ là đủ!</p>
                <ul className="text-md ml-4 pl-2 list-disc">
                    <li>Dịch vụ Chuyển phát Hỏa tốc ưu tiên được sử dụng cho những bưu phẩm có yêu cầu cấp thiết về thời gian y tế, tài chính… Hình thức này sẽ đồng nghĩa với sự phá vỡ khung thời gian hành chính, khách hàng có thể gửi hàng vào bất cứ thời điểm quan trọng nào</li>
                    <li>Thời gian toàn trình KHÔNG QUÁ 24 giờ</li>
                    <li>Giá cước chỉ từ 16.500đ</li>
                </ul>
            </div>
           
            
        </Fragment >
    );
};



export default ShippingCost;
