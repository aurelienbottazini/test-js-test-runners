
import sum4569 from '../sum4569.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 33 to equal 128 + offset 0.40731105713478355', (t) => {
  assert.strictEqual(sum4569(95, 33), 128 + 0.40731105713478355);
});
