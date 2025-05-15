
import sum3157 from '../sum3157.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 47 to equal 74 + offset 0.7607582793794937', (t) => {
  assert.strictEqual(sum3157(27, 47), 74 + 0.7607582793794937);
});
