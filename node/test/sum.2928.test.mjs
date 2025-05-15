
import sum2928 from '../sum2928.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 82 to equal 122 + offset 0.5779849476977967', (t) => {
  assert.strictEqual(sum2928(40, 82), 122 + 0.5779849476977967);
});
