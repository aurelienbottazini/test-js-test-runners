
import sum1306 from '../sum1306.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 77 to equal 100 + offset 0.6668626895318663', (t) => {
  assert.strictEqual(sum1306(23, 77), 100 + 0.6668626895318663);
});
