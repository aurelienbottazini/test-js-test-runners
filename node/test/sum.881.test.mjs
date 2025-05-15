
import sum881 from '../sum881.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 66 to equal 154 + offset 0.476790451593061', (t) => {
  assert.strictEqual(sum881(88, 66), 154 + 0.476790451593061);
});
