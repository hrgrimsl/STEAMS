Second-Order Taylor Expansion About Mean-field Solution

<img src = "https://travis-ci.com/hrgrimsl/STEAMS.svg?token=y5H9g77PxszWJHZmEWzC&branch=master">

Module to use as a python API- e.g.
```python
import STEAMS
geometry = """
    symmetry c1
    0 1
    H 0 0 0
    Cl 0 0 0
"""
basis = 'aug-cc-pvdz'
mol = STEAMS.Molecule(geometry, basis, RHF = True, UNS = False)
print(mol.conj_grad())
```
Program uses a Psi4 backend to compute electron integrals, etc.  Note that if the UNS flag is turned off, one obtains the CEPA(0) energy with single and double excitations included.

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <title>Welcome to STEAMS’s documentation! &#8212; STEAMS 0.1 documentation</title>
    <link rel="stylesheet" href="_static/alabaster.css" type="text/css" />
    <link rel="stylesheet" href="_static/pygments.css" type="text/css" />
    <script type="text/javascript" id="documentation_options" data-url_root="./" src="_static/documentation_options.js"></script>
    <script type="text/javascript" src="_static/jquery.js"></script>
    <script type="text/javascript" src="_static/underscore.js"></script>
    <script type="text/javascript" src="_static/doctools.js"></script>
    <script type="text/javascript" src="_static/language_data.js"></script>
    <link rel="index" title="Index" href="genindex.html" />
    <link rel="search" title="Search" href="search.html" />
   
  <link rel="stylesheet" href="_static/custom.css" type="text/css" />
  
  
  <meta name="viewport" content="width=device-width, initial-scale=0.9, maximum-scale=0.9" />

  </head><body>
  

    <div class="document">
      <div class="documentwrapper">
        <div class="bodywrapper">
          

          <div class="body" role="main">
            
  <div class="section" id="welcome-to-steams-s-documentation">
<h1>Welcome to STEAMS’s documentation!<a class="headerlink" href="#welcome-to-steams-s-documentation" title="Permalink to this headline">¶</a></h1>
<div class="toctree-wrapper compound">
</div>
</div>
<div class="section" id="indices-and-tables">
<h1>Indices and tables<a class="headerlink" href="#indices-and-tables" title="Permalink to this headline">¶</a></h1>
<ul class="simple">
<li><p><a class="reference internal" href="genindex.html"><span class="std std-ref">Index</span></a></p></li>
<li><p><a class="reference internal" href="py-modindex.html"><span class="std std-ref">Module Index</span></a></p></li>
<li><p><a class="reference internal" href="search.html"><span class="std std-ref">Search Page</span></a></p></li>
</ul>
</div>


          </div>
          
        </div>
      </div>
      <div class="sphinxsidebar" role="navigation" aria-label="main navigation">
        <div class="sphinxsidebarwrapper">
<h1 class="logo"><a href="#">STEAMS</a></h1>








<h3>Navigation</h3>

<div class="relations">
<h3>Related Topics</h3>
<ul>
  <li><a href="#">Documentation overview</a><ul>
  </ul></li>
</ul>
</div>
<div id="searchbox" style="display: none" role="search">
  <h3 id="searchlabel">Quick search</h3>
    <div class="searchformwrapper">
    <form class="search" action="search.html" method="get">
      <input type="text" name="q" aria-labelledby="searchlabel" />
      <input type="submit" value="Go" />
    </form>
    </div>
</div>
<script type="text/javascript">$('#searchbox').show(0);</script>








        </div>
      </div>
      <div class="clearer"></div>
    </div>
    <div class="footer">
      &copy;2019, Harper Grimsley.
      
      |
      Powered by <a href="http://sphinx-doc.org/">Sphinx 2.2.0</a>
      &amp; <a href="https://github.com/bitprophet/alabaster">Alabaster 0.7.12</a>
      
      |
      <a href="_sources/index.rst.txt"
          rel="nofollow">Page source</a>
    </div>

    

    
  </body>
</html>

