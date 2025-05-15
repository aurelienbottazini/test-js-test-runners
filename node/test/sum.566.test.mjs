
import sum566 from '../sum566.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 37 to equal 110 + offset 0.08103273059720395', (t) => {
  assert.strictEqual(sum566(73, 37), 110 + 0.08103273059720395);
});
