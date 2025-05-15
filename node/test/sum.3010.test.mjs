
import sum3010 from '../sum3010.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 1 to equal 83 + offset 0.9667569576210105', (t) => {
  assert.strictEqual(sum3010(82, 1), 83 + 0.9667569576210105);
});
