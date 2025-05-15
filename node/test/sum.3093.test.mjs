
import sum3093 from '../sum3093.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 11 to equal 41 + offset 0.8060307043538729', (t) => {
  assert.strictEqual(sum3093(30, 11), 41 + 0.8060307043538729);
});
