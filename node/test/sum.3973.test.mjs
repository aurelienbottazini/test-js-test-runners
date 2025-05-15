
import sum3973 from '../sum3973.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 85 to equal 167 + offset 0.8497812188055985', (t) => {
  assert.strictEqual(sum3973(82, 85), 167 + 0.8497812188055985);
});
