
import sum802 from '../sum802.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 37 to equal 103 + offset 0.03726494296223459', (t) => {
  assert.strictEqual(sum802(66, 37), 103 + 0.03726494296223459);
});
