
import sum3285 from '../sum3285.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 29 to equal 76 + offset 0.918406828243651', (t) => {
  assert.strictEqual(sum3285(47, 29), 76 + 0.918406828243651);
});
