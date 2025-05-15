
import sum4315 from '../sum4315.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 26 to equal 117 + offset 0.9442171290031819', (t) => {
  assert.strictEqual(sum4315(91, 26), 117 + 0.9442171290031819);
});
