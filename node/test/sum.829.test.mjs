
import sum829 from '../sum829.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 64 to equal 80 + offset 0.9208251690499284', (t) => {
  assert.strictEqual(sum829(16, 64), 80 + 0.9208251690499284);
});
