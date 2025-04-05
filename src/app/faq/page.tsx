import PageLayout from '@/components/layout/page-layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQPage() {
  return (
    <PageLayout>
      <div className="boomzi-bg py-12">
        <div className="boomzi-container">
          <h1 className="text-3xl font-semibold mb-12">FAQ</h1>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="order" className="bg-white p-6 border-0">
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  Как оформить заказ?
                </AccordionTrigger>
                <AccordionContent className="text-base mt-4">
                  Выберите интересующее вас изделие на сайте и оставьте заявку, нажав "оформить заказ". После оформления заказа и передачи его в доставку, на ваш номер будет отправлен код. В случае если товар закончился на складе, с вами свяжется наш менеджер.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment" className="bg-white p-6 border-0">
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  Как оплатить заказ?
                </AccordionTrigger>
                <AccordionContent className="text-base mt-4">
                  Вы можете оплатить заказ онлайн при оформлении заказа или при получении. Мы принимаем оплату банковскими картами и наличными.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cash" className="bg-white p-6 border-0">
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  Могу ли оплатить товар наличными при получении?
                </AccordionTrigger>
                <AccordionContent className="text-base mt-4">
                  Да, вы можете оплатить товар наличными при получении в нашем магазине в г. Грозный. При доставке в другие города оплата производится онлайн.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery1" className="bg-white p-6 border-0">
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  Сроки и стоимость доставки
                </AccordionTrigger>
                <AccordionContent className="text-base mt-4">
                  Сроки доставки зависят от вашего региона. В Грозном доставка осуществляется в течение 1-2 дней. По России в среднем 3-7 дней. Стоимость доставки рассчитывается индивидуально в зависимости от региона и веса заказа.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="return" className="bg-white p-6 border-0">
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  Как оформить возврат?
                </AccordionTrigger>
                <AccordionContent className="text-base mt-4">
                  Для оформления возврата свяжитесь с нами по телефону или электронной почте в течение 14 дней с момента получения заказа. Товар должен быть в идеальном состоянии, с сохранением всех бирок и упаковки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery2" className="bg-white p-6 border-0">
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  Сроки и стоимость доставки
                </AccordionTrigger>
                <AccordionContent className="text-base mt-4">
                  Сроки доставки зависят от вашего региона. В Грозном доставка осуществляется в течение 1-2 дней. По России в среднем 3-7 дней. Стоимость доставки рассчитывается индивидуально в зависимости от региона и веса заказа.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
