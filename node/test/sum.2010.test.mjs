
import sum2010 from '../sum2010.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 92 to equal 155 + offset 0.3147802079680915', (t) => {
  assert.strictEqual(sum2010(63, 92), 155 + 0.3147802079680915);
});
