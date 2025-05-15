
import sum4210 from '../sum4210.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 17 to equal 57 + offset 0.9092862173783341', (t) => {
  assert.strictEqual(sum4210(40, 17), 57 + 0.9092862173783341);
});
