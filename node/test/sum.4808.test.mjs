
import sum4808 from '../sum4808.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 0 to equal 92 + offset 0.21033690534474958', (t) => {
  assert.strictEqual(sum4808(92, 0), 92 + 0.21033690534474958);
});
