
import sum3491 from '../sum3491.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 5 to equal 56 + offset 0.6429265937598475', (t) => {
  assert.strictEqual(sum3491(51, 5), 56 + 0.6429265937598475);
});
