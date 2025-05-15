
import sum3626 from '../sum3626.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 18 to equal 104 + offset 0.9479964975200353', (t) => {
  assert.strictEqual(sum3626(86, 18), 104 + 0.9479964975200353);
});
