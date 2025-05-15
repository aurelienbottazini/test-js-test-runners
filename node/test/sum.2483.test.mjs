
import sum2483 from '../sum2483.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 52 to equal 66 + offset 0.1189700052719308', (t) => {
  assert.strictEqual(sum2483(14, 52), 66 + 0.1189700052719308);
});
