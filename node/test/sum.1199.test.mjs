
import sum1199 from '../sum1199.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 97 to equal 158 + offset 0.6884457878001358', (t) => {
  assert.strictEqual(sum1199(61, 97), 158 + 0.6884457878001358);
});
