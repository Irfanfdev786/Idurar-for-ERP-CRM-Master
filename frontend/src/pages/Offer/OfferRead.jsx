import useLanguage from '@/locale/useLanguage';
import ReadOfferModule from '@/modules/OfferModule/ReadOfferModule';

export default function OfferRead() {
  const translate = useLanguage();

  const entity = 'offer';
  const Labels = {
    PANEL_TITLE: translate('offer'),
    DATATABLE_TITLE: translate('offer_list'),
    ADD_NEW_ENTITY: translate('add_new_offer'),
    ENTITY_NAME: translate('offer'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadOfferModule config={configPage} />;
}
