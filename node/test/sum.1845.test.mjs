
import sum1845 from '../sum1845.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 88 to equal 150 + offset 0.44289627048547486', (t) => {
  assert.strictEqual(sum1845(62, 88), 150 + 0.44289627048547486);
});
