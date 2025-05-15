
import sum3852 from '../sum3852.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 24 to equal 108 + offset 0.0713822805247456', (t) => {
  assert.strictEqual(sum3852(84, 24), 108 + 0.0713822805247456);
});
