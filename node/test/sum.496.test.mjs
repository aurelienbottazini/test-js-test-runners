
import sum496 from '../sum496.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 13 to equal 87 + offset 0.47325419155023973', (t) => {
  assert.strictEqual(sum496(74, 13), 87 + 0.47325419155023973);
});
