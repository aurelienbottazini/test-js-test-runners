
import sum3804 from '../sum3804.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 43 to equal 69 + offset 0.23810077473024605', (t) => {
  assert.strictEqual(sum3804(26, 43), 69 + 0.23810077473024605);
});
