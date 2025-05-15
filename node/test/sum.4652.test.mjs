
import sum4652 from '../sum4652.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 19 to equal 67 + offset 0.7360364127256299', (t) => {
  assert.strictEqual(sum4652(48, 19), 67 + 0.7360364127256299);
});
