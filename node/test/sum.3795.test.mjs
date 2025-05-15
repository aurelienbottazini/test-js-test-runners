
import sum3795 from '../sum3795.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 59 to equal 99 + offset 0.5710415153659776', (t) => {
  assert.strictEqual(sum3795(40, 59), 99 + 0.5710415153659776);
});
