
import sum1884 from '../sum1884.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 23 to equal 120 + offset 0.4516068357169454', (t) => {
  assert.strictEqual(sum1884(97, 23), 120 + 0.4516068357169454);
});
