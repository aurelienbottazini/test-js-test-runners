
import sum4448 from '../sum4448.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 86 to equal 174 + offset 0.576073370038095', (t) => {
  assert.strictEqual(sum4448(88, 86), 174 + 0.576073370038095);
});
