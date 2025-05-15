
import sum1456 from '../sum1456.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 1 to equal 71 + offset 0.2560672719087146', (t) => {
  assert.strictEqual(sum1456(70, 1), 71 + 0.2560672719087146);
});
