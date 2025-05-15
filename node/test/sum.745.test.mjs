
import sum745 from '../sum745.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 68 to equal 148 + offset 0.4144817643916825', (t) => {
  assert.strictEqual(sum745(80, 68), 148 + 0.4144817643916825);
});
