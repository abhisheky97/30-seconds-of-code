import React from 'react';
import Meta from 'components/organisms/meta';
import PageTitle from 'components/atoms/pageTitle';
import { AnchorButton } from 'components/atoms/button';
import PageBackdrop from 'components/molecules/pageBackdrop';
import Shell from 'components/organisms/shell';
import PropTypes from 'prop-types';
import literals from 'lang/en/client/notFound';

const propTypes = {
  pageContext: PropTypes.shape({
    logoSrc: PropTypes.string.isRequired,
    splashLogoSrc: PropTypes.string.isRequired,
  }),
};

/**
 * Renders a not found page.
 * Responsible for rendering the /404 page.
 */
const NotFoundPage = ({
  pageContext: {
    logoSrc,
    splashLogoSrc,
  },
}) => (
  <>
    <Meta
      logoSrc={ splashLogoSrc }
      title={ literals.pageNotFound }
    />
    <Shell logoSrc={ logoSrc } >
      <PageTitle>{ literals.fourOhFour }</PageTitle>
      <PageBackdrop
        graphicName='page-not-found'
        mainText={ (
          <>
            <strong>{ literals.pageNotFound }</strong>
            <br />
          </>
        ) }
        subText={ literals.notFoundDescription }
      >
        <AnchorButton
          link={ {
            url: '/',
            internal: true,
          } }
          className='btn-home icon icon-home'
        >
          { literals.goHome }
        </AnchorButton>
      </PageBackdrop>
    </Shell>
  </>
);

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;
