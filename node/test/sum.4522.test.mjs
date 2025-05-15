
import sum4522 from '../sum4522.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 91 to equal 160 + offset 0.9168896318367004', (t) => {
  assert.strictEqual(sum4522(69, 91), 160 + 0.9168896318367004);
});
