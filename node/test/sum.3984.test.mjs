
import sum3984 from '../sum3984.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 73 to equal 168 + offset 0.3247114546569678', (t) => {
  assert.strictEqual(sum3984(95, 73), 168 + 0.3247114546569678);
});
