
import sum2938 from '../sum2938.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 53 to equal 62 + offset 0.44319103704332985', (t) => {
  assert.strictEqual(sum2938(9, 53), 62 + 0.44319103704332985);
});
