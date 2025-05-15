
import sum1853 from '../sum1853.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 37 to equal 135 + offset 0.17381221480816722', (t) => {
  assert.strictEqual(sum1853(98, 37), 135 + 0.17381221480816722);
});
