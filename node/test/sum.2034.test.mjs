
import sum2034 from '../sum2034.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 79 to equal 133 + offset 0.6242184483730918', (t) => {
  assert.strictEqual(sum2034(54, 79), 133 + 0.6242184483730918);
});
