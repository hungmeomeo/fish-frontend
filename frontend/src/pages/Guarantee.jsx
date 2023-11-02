
import { Fragment } from "react";

const Guarantee = () => {
    return (
        <Fragment>
            
            <h1 className="text-3xl font-bold text-center my-4">Đảm bảo và Cam kết</h1>
            <p className="mx-auto max-w-7xl items-center justify-between px-6 lg:px-8">Chúng tôi cam kết mang đến trải nghiệm mua sắm trực tuyến an toàn, thuận lợi và đáng tin cậy cho tất cả khách hàng của chúng tôi.
            Dưới đây là những cam kết và đảm bảo chúng tôi mang đến:</p>
            <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
                <p className="text-lg my-2 font-bold">1. Chất Lượng Sản Phẩm:</p>
                <p className="text-md ml-4 pl-2">
                Chúng tôi chỉ cung cấp các sản phẩm chất lượng cao từ các nhà sản xuất uy tín. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng 
                trước khi đến tay bạn để đảm bảo chúng đáp ứng các tiêu chuẩn chất lượng cao nhất.
                </p>
            
                <p className="text-lg my-2  font-bold">2. An toàn thanh toán</p>
                <p className="text-md ml-4 pl-2">
                Dữ liệu thanh toán của bạn luôn được bảo vệ một cách an toàn. Chúng tôi sử dụng các phương pháp thanh toán an toàn và mã hóa dữ liệu 
                để ngăn chặn bất kỳ vi phạm nào liên quan đến thông tin thanh toán của bạn.
                </p>

                <p className="text-lg my-2  font-bold">3. Chính sách đổi trả linh hoạt</p>
                <p className="text-md ml-4 pl-2">
                Nếu bạn không hài lòng với sản phẩm nhận được, bạn có thể yên tâm sử dụng chính sách đổi trả của chúng tôi. Chúng tôi sẽ hỗ trợ bạn 
                trong quá trình đổi trả và hoàn trả tiền một cách nhanh chóng.
                </p>
            </div>
           
            
        </Fragment >
    );
};



export default Guarantee;
