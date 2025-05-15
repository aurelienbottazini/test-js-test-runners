
import sum3333 from '../sum3333.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 51 to equal 61 + offset 0.3219321760615257', (t) => {
  assert.strictEqual(sum3333(10, 51), 61 + 0.3219321760615257);
});
