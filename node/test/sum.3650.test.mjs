
import sum3650 from '../sum3650.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 79 to equal 96 + offset 0.19134817579192698', (t) => {
  assert.strictEqual(sum3650(17, 79), 96 + 0.19134817579192698);
});
