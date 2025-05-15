
import sum3912 from '../sum3912.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 87 to equal 171 + offset 0.491012247570203', (t) => {
  assert.strictEqual(sum3912(84, 87), 171 + 0.491012247570203);
});
