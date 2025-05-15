
import sum129 from '../sum129.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 32 to equal 118 + offset 0.3659829876845193', (t) => {
  assert.strictEqual(sum129(86, 32), 118 + 0.3659829876845193);
});
