
import sum2896 from '../sum2896.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 62 to equal 161 + offset 0.2882965907436753', (t) => {
  assert.strictEqual(sum2896(99, 62), 161 + 0.2882965907436753);
});
