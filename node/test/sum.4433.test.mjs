
import sum4433 from '../sum4433.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 20 to equal 81 + offset 0.37130510144537454', (t) => {
  assert.strictEqual(sum4433(61, 20), 81 + 0.37130510144537454);
});
