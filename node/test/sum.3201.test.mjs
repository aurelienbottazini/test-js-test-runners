
import sum3201 from '../sum3201.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 97 to equal 179 + offset 0.05538870686874353', (t) => {
  assert.strictEqual(sum3201(82, 97), 179 + 0.05538870686874353);
});
