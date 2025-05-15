
import sum2772 from '../sum2772.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 35 to equal 94 + offset 0.8031418329069854', (t) => {
  assert.strictEqual(sum2772(59, 35), 94 + 0.8031418329069854);
});
